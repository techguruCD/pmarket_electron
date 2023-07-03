const moment = require('moment');
const validator = require('validator');
const mysql = require('../models/mysqlConnect');
const isEmpty = require('../utils/isEmpty');
const Job = require('../models/Job');
const Notification = require('../models/Notification')
const { escapeHTML } = require('../utils');

exports.list = (req, res) => {
    Job.listWithPagination({
        page: req.query.page,
        perPage: req.query.perPage,
        extra: { orderBy: { created_at: 'desc' } }
    }).then(({ list, page, perPage, totalPage }) => {
        return res.json({
            status: 0,
            list,
            page, perPage, totalPage
        })
    }).catch(err => {
        console.log(err);
        res.json({
            status: 1,
            message: 'Please try again later.'
        })
    })
}

exports.findOne = (req, res) => {
    Job.findOne(req.query.id).then(({ job, categories, jobUsers }) => {
        if (!job) {
            return res.json({
                status: 1,
                message: 'Job not found.'
            })
        }
        return res.json({
            status: 0,
            job, categories, jobUsers
        })
    }).catch(err => {
        return res.json({
            status: 1,
            message: 'Please try again later.'
        })
    })
}

exports.categories = (req, res) => {
    mysql.select('category_list').then(list => {
        return res.json({
            status: 0,
            list
        })
    }).catch(err => {
        return res.json({
            status: 1,
            message: "Please try again later."
        })
    })
}

const validate = (job, isNew = true) => {
    const { title, short_description, full_description, job_nature, tags, budget, jobUsers, categories, delivery_day } = job;
    const errors = {};
    if (isEmpty(title)) errors.title = 'Title field is required';
    if (isEmpty(short_description)) errors.short_description = 'Short desciription field is required';
    if (isEmpty(full_description)) errors.full_description = 'Full description field is required';
    if (job_nature === undefined) errors.job_nature = 'Job nature field is required';
    // if (isEmpty(tags)) errors.tags = 'Tags field is required';
    // if (false && isNew && isEmpty(jobUsers)) errors.jobUsers = "Designers field is required";
    if (isEmpty(categories)) errors.categories = "Category field is required";
    else if (!Array.isArray(categories)) errors.categories = "Category is invalid";
    if (!delivery_day) errors.delivery_day = "Delivery Day field is required";
    return {
        isValid: !Object.keys(errors).length,
        errors
    }
}

exports.new = (req, res) => {
    const { isValid, errors } = validate(req.body);
    if (!isValid) {
        return res.json({
            status: 1,
            errors
        });
    }

    const currentDateStr = moment(new Date()).format("yyyy-MM-DD HH:mm:ss");

    let { title, short_description, full_description, job_nature, tags, is_featured, is_urgent, budget, categories, delivery_day, role, users } = req.body;
    title = escapeHTML(title);
    short_description = escapeHTML(short_description);
    full_description = escapeHTML(full_description);
    job_nature = escapeHTML(job_nature);
    tags = escapeHTML(tags);
    is_featured = escapeHTML(is_featured);
    is_urgent = escapeHTML(is_urgent);
    budget = escapeHTML(budget);
    users = escapeHTML(users);
    categories = escapeHTML(categories);
    role = escapeHTML(role);

    const newJob = {
        title,
        short_description,
        full_description,
        job_nature,
        tags,
        is_featured,
        is_urgent,
        budget,
        delivery_day,
        status_id: 1,
        created_at: currentDateStr,
        updated_at: currentDateStr
    }
    if (role) {
        newJob.type_id = 1;
    } else if (users && Array.isArray(users) && users.length) {
        newJob.type_id = 2;
    }

    mysql.insertOne("freelance_jobs", newJob).then(job => {
        const promiseArray = [];
        const newCategories = [];
        const newJobDistributions = [];
        categories.forEach(item => {
            newCategories.push({ category_id: item, job_id: job.id });
        });
        if (role) {
            newJobDistributions.push({
                created_at: currentDateStr,
                updated_at: currentDateStr,
                job_id: job.id,
                role_id: role
            });
            promiseArray.push(Notification.generateJobRoleNotification(role, job));
        } else if (users && Array.isArray(users) && users.length) {
            users.forEach(user_id => {
                newJobDistributions.push({
                    created_at: currentDateStr,
                    updated_at: currentDateStr,
                    job_id: job.id,
                    user_id: user_id
                })
            })
            promiseArray.push(Notification.generateJobUserNotification(users, job));
        }
        promiseArray.push(mysql.insertMany("job_distribution_list", newJobDistributions));
        promiseArray.push(mysql.insertMany("job_category", newCategories));
        Promise.all(promiseArray).then(() => {
            return res.json({
                status: 0
            })
        }).catch(err => {
            console.log(err);
            return res.json({
                status: 1,
                message: "Please try again later."
            })
        });
    }).catch(err => {
        console.log(err);
        return res.json({
            status: 1,
            message: "Please try again later."
        })
    });
}

exports.update = (req, res) => {
    const { isValid, errors } = validate(req.body, false);
    if (!isValid) {
        return res.json({
            status: 1,
            errors
        });
    }

    let { id, title, short_description, full_description, job_nature, tags, is_featured, is_urgent, budget, categories, delivery_day } = req.body;
    id = escapeHTML(id);
    title = escapeHTML(title);
    short_description = escapeHTML(short_description);
    full_description = escapeHTML(full_description);
    job_nature = escapeHTML(job_nature);
    tags = escapeHTML(tags);
    is_featured = escapeHTML(is_featured);
    is_urgent = escapeHTML(is_urgent);
    budget = escapeHTML(budget);
    categories = escapeHTML(categories);

    const updatedJob = {
        title,
        short_description,
        full_description,
        job_nature,
        tags,
        is_featured,
        is_urgent,
        budget,
        delivery_day,
        updated_at: moment(new Date()).format("yyyy-MM-DD HH:mm:ss")
    };
    let newCategorySQL = '';
    categories.forEach(item => {
        newCategorySQL += mysql.getInsertQuery("job_category", { category_id: item, job_id: id });
    });
    Promise.all([
        mysql.update("freelance_jobs", { id }, updatedJob),
        mysql.query(`delete from job_category where job_id = ${id};${newCategorySQL}`)
    ]).then(() => {
        return res.json({
            status: 0
        })
    }).catch(err => {
        console.log(err);
        return res.json({
            status: 1,
            message: 'Please try again later.'
        })
    })
}

exports.closeJob = (req, res) => {
    if (!req.body.id) {
        return res.json({
            status: 1,
            message: "Job not found"
        })
    }
    req.body.id = escapeHTML(req.body.id);
    Job.closeJob(req.body.id).then((job) => {
        if (!job) {
            return res.json({
                status: 1,
                message: "Job not found"
            })
        }
        return res.json({
            status: 1,
            job,
            message: "Job closed successfuly"
        })
    }).catch(err => {
        console.log(err);
        res.json({
            status: 1,
            message: "Please try again later."
        })
    })
}