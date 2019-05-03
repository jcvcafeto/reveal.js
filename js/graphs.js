// loads csv module
var csv = require('csv');
var csvObj = csv();

// Our object
function MyCSV(summary, issueKey, issueId, issueType, status, projectLead, priority, resolution, assignee, reporter, creator, created, updated, lastView, resolved, labels, description){
    this.summary = summary;
    this.issueKey = issueKey;
    this.issueId = issueId;
    this.issueType = issueType;
    this.status = status;
    this.projectLead = projectLead;
    this.priority = priority;
    this.resolution = resolution;
    this.assignee = assignee;
    this.reporter = reporter;
    this.creator = creator;
    this.created = created;
    this.updated = updated;
    this.lastView = lastView;
    this.resolved = resolved;
    this.labels = labels;
    this.description = description;
}

// data array
var data = [];



