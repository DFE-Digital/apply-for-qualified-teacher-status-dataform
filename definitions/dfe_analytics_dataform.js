const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
  eventSourceName: "apply-for-qts",
  bqProjectName: "apply-for-qts-in-england",
  bqDatasetName: "events_production",
  bqEventsTableName: "events",
  urlRegex: "apply-for-qts-in-england.education.gov.uk",
  dataSchema: [{
    entityTableName: "active_storage_variant_records",
    description: "",
    keys: [{
      keyName: "blob_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "variation_digest",
      dataType: "string",
      description: "",
    }]
  }, {
    entityTableName: "active_storage_blobs",
    description: "",
    keys: [{
      keyName: "key",
      dataType: "string",
      description: "",
    }, {
      keyName: "filename",
      dataType: "string",
      description: "",
    }, {
      keyName: "content_type",
      dataType: "string",
      description: "",
    }, {
      keyName: "metadata",
      dataType: "string",
      description: "",
    }, {
      keyName: "service_name",
      dataType: "string",
      description: "",
    }, {
      keyName: "byte_size",
      dataType: "integer",
      description: "",
    }, {
      keyName: "checksum",
      dataType: "string",
      description: "",
    }]
  }, {
    entityTableName: "application_forms",
    description: "",
    keys: [{
      keyName: "reference",
      dataType: "string",
      description: "",
    }, {
      keyName: "state",
      dataType: "string",
      description: "",
    }, {
      keyName: "teacher_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "given_names",
      dataType: "string",
      description: "",
    }, {
      keyName: "family_name",
      dataType: "string",
      description: "",
    }, {
      keyName: "date_of_birth",
      dataType: "string",
      description: "",
    }, {
      keyName: "age_range_min",
      dataType: "integer",
      description: "",
    }, {
      keyName: "age_range_max",
      dataType: "integer",
      description: "",
    }, {
      keyName: "has_alternative_name",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "alternative_given_names",
      dataType: "string",
      description: "",
    }, {
      keyName: "alternative_family_name",
      dataType: "string",
      description: "",
    }, {
      keyName: "region_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "registration_number",
      dataType: "string",
      description: "",
    }, {
      keyName: "subjects",
      dataType: "string",
      description: "",
    }, {
      keyName: "submitted_at",
      dataType: "date",
      description: "",
    }, {
      keyName: "working_days_since_submission",
      dataType: "integer",
      description: "",
    }, {
      keyName: "personal_information_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "identification_document_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "qualifications_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "age_range_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "subjects_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "work_history_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "registration_number_status",
      dataType: "string",
      description: "",
    }, {
      keyName: "written_statement_status",
      dataType: "string",
      description: "",
    }]
  }, {
    entityTableName: "countries",
    description: "",
    keys: [{
      keyName: "code",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_address",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_emails",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_websites",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_certificate",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_other",
      dataType: "string",
      description: "",
    }, {
      keyName: "teaching_authority_name",
      dataType: "string",
      description: "",
    }]
  }, {
    entityTableName: "documents",
    description: "",
    keys: [{
      keyName: "document_type",
      dataType: "string",
      description: "",
    }, {
      keyName: "documentable_type",
      dataType: "string",
      description: "",
    }, {
      keyName: "documentable_id",
      dataType: "string",
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
    entityTableName: "qualifications",
    description: "",
    keys: [{
      keyName: "application_form_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "title",
      dataType: "string",
      description: "",
    }, {
      keyName: "institution_name",
      dataType: "string",
      description: "",
    }, {
      keyName: "institution_country",
      dataType: "string",
      description: "",
    }, {
      keyName: "start_date",
      dataType: "string",
      description: "",
    }, {
      keyName: "complete_date",
      dataType: "string",
      description: "",
    }, {
      keyName: "certificate_date",
      dataType: "string",
      description: "",
    }, {
      keyName: "part_of_university_degree",
      dataType: "boolean",
      description: "",
    }]
  }, {
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
      keyName: "teaching_authority_other",
      dataType: "string",
      description: ""
    }, {
      keyName: "legacy",
      dataType: "boolean",
      description: ""
    }]
  }, {
    entityTableName: "staff",
    description: "",
    keys: [{
      keyName: "email",
      dataType: "string",
      description: "",
    }, {
      keyName: "reset_password_sent_at",
      dataType: "string",
      description: "",
    }, {
      keyName: "remember_created_at",
      dataType: "string",
      description: "",
    }, {
      keyName: "sign_in_count",
      dataType: "integer",
      description: "",
    }, {
      keyName: "current_sign_in_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "last_sign_in_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "current_sign_in_ip",
      dataType: "string",
      description: ""
    }, {
      keyName: "last_sign_in_ip",
      dataType: "string",
      description: ""
    }, {
      keyName: "confirmed_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "confirmation_sent_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "unconfirmed_email",
      dataType: "string",
      description: ""
    }, {
      keyName: "failed_attempts",
      dataType: "integer",
      description: ""
    }, {
      keyName: "locked_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "invitation_created_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "invitation_sent_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "invitation_accepted_at",
      dataType: "string",
      description: ""
    }, {
      keyName: "invitation_limit",
      dataType: "integer",
      description: ""
    }, {
      keyName: "invited_by_type",
      dataType: "string",
      description: ""
    }, {
      keyName: "invited_by_id",
      dataType: "integer",
      description: ""
    }, {
      keyName: "invitations_count",
      dataType: "integer",
      description: ""
    }]
  }, {
    entityTableName: "teachers",
    description: "",
    keys: [{
      keyName: "email",
      dataType: "string",
      description: "",
    }, {
      keyName: "confirmed_at",
      dataType: "string",
      description: "",
    }, {
      keyName: "confirmation_sent_at",
      dataType: "string",
      description: "",
    }, {
      keyName: "unconfirmed_email",
      dataType: "string",
      description: "",
    }]
  }, {
    entityTableName: "timeline_events",
    description: "",
    keys: [{
      keyName: "event_type",
      dataType: "string",
      description: "",
      alias: "qts_event_type"
    }, {
      keyName: "application_form_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "annotation",
      dataType: "string",
      description: "",
    }, {
      keyName: "creator_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "creator_type",
      dataType: "string",
      description: "",
    }, {
      keyName: "assignee_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "old_state",
      dataType: "string",
      description: "",
    }, {
      keyName: "new_state",
      dataType: "string",
      description: "",
    }]
  }, {
    entityTableName: "uploads",
    description: "",
    keys: [{
      keyName: "document_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "translation",
      dataType: "boolean",
      description: "",
    }]
  }, {
    entityTableName: "work_histories",
    description: "",
    keys: [{
      keyName: "application_form_id",
      dataType: "string",
      description: "",
    }, {
      keyName: "school_name",
      dataType: "string",
      description: "",
    }, {
      keyName: "city",
      dataType: "string",
      description: "",
    }, {
      keyName: "country",
      dataType: "string",
      description: "",
    }, {
      keyName: "job",
      dataType: "string",
      description: "",
    }, {
      keyName: "email",
      dataType: "string",
      description: "",
    }, {
      keyName: "start_date",
      dataType: "string",
      description: "",
    }, {
      keyName: "still_employed",
      dataType: "boolean",
      description: "",
    }, {
      keyName: "end_date",
      dataType: "string",
      description: "",
    }]
  }]
});
