const dfeAnalyticsDataform = require("dfe-analytics-dataform");

// Repeat the lines below for each and every events table you want dfe-analytics-dataform to process in your Dataform project - distinguish between them by giving each one a different eventSourceName. This will cause all the tables produced automatically by dfe-analytics-dataform to have your suffix included in them to allow users to tell the difference between them.
dfeAnalyticsDataform({
  eventSourceName: "apply-for-qts",
  bqProjectName: "apply-for-qts-in-england",
  bqDatasetName: "events_production",
  bqEventsTableName: "events",
  dataSchema: [{
    entityTableName: "regions",
    description: "",
    keys: [{
      keyName: "country_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "name",
      dataType: "string",
      description: "",
    }, {
      keyName: "sanction_check",
      dataType: "string",
      description: "",
    }, {
      keyName: "status_check",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_certificate",
      dataType: "string",
      description: ""
    }, {
      keyName: "teaching_authority_address",
      dataType: "string",
      description: ""
    }, {
      keyName: "teaching_authority_website",
      dataType: "string",
      description: ""
    }, {
      keyName: "teaching_authority_email_address",
      dataType: "string",
      description: ""
    }, {
      keyName: "legacy",
      dataType: "boolean",
      description: ""
    }]
  }, {
    entityTableName: "features",
    description: "",
    keys: [{
      keyName: "name",
      dataType: "string",
      description: "",
    }, {
      keyName: "active",
      dataType: "boolean",
      description: "",
    }]
  }, {
    entityTableName: "eligibility_checks",
    description: "",
    keys: [{
      keyName: "free_of_sanctions",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "teach_children",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "qualification",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "degree",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "completed_requirements",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "country_code",
      dataType: "string",
      description: "",
    }, {
      keyName: "region_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "completed_at",
      dataType: "date",
      description: "",
    }]
  }, {
    entityTableName: "countries",
    description: "",
    keys: [{
      keyName: "code",
      dataType: "string",
      description: "",
    }]
  }]
});
