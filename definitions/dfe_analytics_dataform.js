const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
  eventSourceName: "afqts",
  bqProjectName: "apply-for-qts-in-england",
  bqDatasetName: "events_production",
  bqEventsTableName: "events",
  urlRegex: "apply-for-qts-in-england.education.gov.uk",
  dataSchema: [
    {
      entityTableName: "active_storage_attachments",
      description: "",
      keys: [
        {
          keyName: "blob_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "record_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "record_type",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "active_storage_blobs",
      description: "",
      keys: [
        {
          keyName: "byte_size",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "checksum",
          dataType: "string",
          description: "",
        },
        {
          keyName: "content_type",
          dataType: "string",
          description: "",
        },
        {
          keyName: "filename",
          dataType: "string",
          description: "",
        },
        {
          keyName: "key",
          dataType: "string",
          description: "",
        },
        {
          keyName: "metadata",
          dataType: "string",
          description: "",
        },
        {
          keyName: "service_name",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "application_forms",
      description: "",
      keys: [
         {
          keyName: "action_required_by",
          dataType: "string",
          description: "Action that needs to be taken by someone on an application",
        },
        {
          keyName: "age_range_max",
          dataType: "string",
          description: "",
        },
        {
          keyName: "age_range_min",
          dataType: "string",
          description: "",
        },
        {
          keyName: "age_range_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "alternative_family_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "alternative_given_names",
          dataType: "string",
          description: "",
        },
        {
          keyName: "assessor_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "awarded_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "confirmed_no_sanctions",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "date_of_birth",
          dataType: "string",
          description: "",
        },
        {
          keyName: "declined_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "dqt_match",
          dataType: "string",
          description: "",
        },
        {
          keyName: "english_language_citizenship_exempt",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "english_language_proof_method",
          dataType: "string",
          description: "",
        },
        {
          keyName: "english_language_provider_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "english_language_provider_other",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "english_language_provider_reference",
          dataType: "string",
          description: "",
        },
        {
          keyName: "english_language_qualification_exempt",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "english_language_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "family_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "given_names",
          dataType: "string",
          description: "",
        },
        {
          keyName: "has_alternative_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "has_work_history",
          dataType: "string",
          description: "",
        },
        {
          keyName: "identification_document_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "needs_registration_number",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "needs_work_history",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "needs_written_statement",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "overdue_further_information",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "overdue_professional_standing",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "overdue_qualification",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "overdue_reference",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "personal_information_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "qualifications_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "received_further_information",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "received_professional_standing",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "received_qualification",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "received_reference",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "reduced_evidence_accepted",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "reference",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "region_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "registration_number",
          dataType: "string",
          description: "",
        },
        {
          keyName: "registration_number_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "requires_preliminary_check",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "reviewer_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "stage",
          dataType: "string",
          description: "Point of the application journey an application is in",
        },
        {
          keyName: "status",
          dataType: "string",
          description: "",
          alias: "state",
        },
        {
          keyName: "statuses",
          dataType: "string",
          description: "Status or statuses an application is in",
        },
        {
          keyName: "subjects",
          dataType: "string",
          description: "",
        },
        {
          keyName: "subjects_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "submitted_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "teacher_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_provides_written_statement",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "waiting_on_further_information",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "waiting_on_professional_standing",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "waiting_on_qualification",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "waiting_on_reference",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "withdrawn_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "work_history_status",
          dataType: "string",
          description: "",
        },
        {
          keyName: "working_days_since_submission",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "written_statement_confirmation",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "written_statement_optional",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "written_statement_status",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "assessment_sections",
      description: "",
      keys: [
        {
          keyName: "assessment_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "checks",
          dataType: "string",
          description: "",
        },
        {
          keyName: "failure_reasons",
          dataType: "string",
          description: "",
        },
        {
          keyName: "key",
          dataType: "string",
          description: "",
        },
        {
          keyName: "passed",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "preliminary",
          dataType: "boolean",
          description: "",
        },
      ],
    },
    {
      entityTableName: "assessments",
      description: "",
      keys: [
        {
          keyName: "age_range_max",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "age_range_min",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "age_range_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "application_form_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "induction_required",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "recommendation",
          dataType: "string",
          description: "",
        },
        {
          keyName: "recommendation_assessor_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "recommended_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "references_verified",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "scotland_full_registration",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "started_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "subjects",
          dataType: "string",
          description: "",
        },
        {
          keyName: "subjects_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "working_days_since_started",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "working_days_started_to_recommendation",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "working_days_submission_to_recommendation",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "working_days_submission_to_started",
          dataType: "integer",
          description: "",
        },
      ],
    },
    {
      entityTableName: "countries",
      description: "",
      keys: [
        {
          keyName: "code",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_address",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_emails",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_websites",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_certificate",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_other",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_name",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "documents",
      description: "",
      keys: [
        {
          keyName: "available",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "completed",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "document_type",
          dataType: "string",
          description: "",
        },
        {
          keyName: "documentable_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "documentable_type",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "dqt_trn_requests",
      description: "",
      keys: [
        {
          keyName: "application_form_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "potential_duplicate",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "request_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "state",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "eligibility_checks",
      description: "",
      keys: [
        {
          keyName: "completed_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "country_code",
          dataType: "string",
          description: "",
        },
        {
          keyName: "degree",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "free_of_sanctions",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "qualification",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "qualified_for_subject",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "region_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teach_children",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "work_experience",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "further_information_request_items",
      description: "",
      keys: [
        {
          keyName: "contact_email",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_job",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "failure_reason_assessor_feedback",
          dataType: "string",
          description: "",
        },
        {
          keyName: "failure_reason_key",
          dataType: "string",
          description: "",
        },
        {
          keyName: "further_information_request_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "information_type",
          dataType: "string",
          description: "",
        },
        {
          keyName: "response",
          dataType: "string",
          description: "",
        },
        {
          keyName: "work_history_id",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "further_information_requests",
      description: "",
      keys: [
        {
          keyName: "assessment_id",
          dataType: "string",
          description: "",
        },
           {
          keyName: "expired_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "review_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "review_passed",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "received_at",
          dataType: "timestamp",
          description: "",
        },
           {
          keyName: "requested_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reviewed_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "working_days_assessment_started_to_creation",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "working_days_received_to_recommendation",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "working_days_since_received",
          dataType: "integer",
          description: "",
        },
      ],
    },
    {
      entityTableName: "notes",
      description: "",
      keys: [
        {
          keyName: "application_form_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "author_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "text",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "professional_standing_requests",
      description: "",
      keys: [
        {
          keyName: "assessment_id",
          dataType: "string",
          description: "",
        },
          {
          keyName: "expired_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "review_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "location_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "review_passed",
          dataType: "string",
          description: "",
        },
        {
          keyName: "ready_for_review",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "received_at",
          dataType: "timestamp",
          description: "",
        },
          {
          keyName: "requested_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reviewed_at",
          dataType: "string",
          description: "",
        },
         {
          keyName: "verified_at",
          dataType: "timestamp",
          description: "",
        },
          {
          keyName: "verify_note",
          dataType: "string",
          description: "",
        },
          {
          keyName: "verify_passed",
          dataType: "boolean",
          description: "",
        },
        ],
    },
    {
      entityTableName: "qualification_requests",
      description: "",
      keys: [
        {
          keyName: "assessment_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "expired_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "review_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "location_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "review_passed",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "qualification_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "received_at",
          dataType: "timestamp",
          description: "",
        },
          {
          keyName: "requested_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reviewed_at",
          dataType: "timestamp",
          description: "",
        },
          {
          keyName: "verified_at",
          dataType: "timestamp",
          description: "",
        },
          {
          keyName: "verify_note",
          dataType: "string",
          description: "",
        },
          {
          keyName: "verify_passed",
          dataType: "boolean",
          description: "",
        },
        ],
    },
    {
      entityTableName: "qualifications",
      description: "",
      keys: [
        {
          keyName: "application_form_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "certificate_date",
          dataType: "string",
          description: "",
        },
        {
          keyName: "complete_date",
          dataType: "string",
          description: "",
        },
        {
          keyName: "institution_country_code",
          dataType: "string",
          description: "",
        },
        {
          keyName: "institution_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "part_of_university_degree",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "start_date",
          dataType: "string",
          description: "",
        },
        {
          keyName: "title",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "reference_requests",
      description: "",
      keys: [
        {
          keyName: "additional_information_response",
          dataType: "string",
          description: "",
        },
        {
          keyName: "assessment_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "children_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "children_response",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "contact_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_job",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_response",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "dates_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "dates_response",
          dataType: "boolean",
          description: "",
        },
          {
          keyName: "expired_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "review_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "hours_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "hours_response",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "lessons_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "lessons_response",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "misconduct_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "misconduct_response",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "review_passed",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "received_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reports_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "reports_response",
          dataType: "boolean",
          description: "",
        },
          {
          keyName: "requested_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reviewed_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "satisfied_comment",
          dataType: "string",
          description: "",
        },
        {
          keyName: "satisfied_response",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "slug",
          dataType: "string",
          description: "",
        },
         {
          keyName: "verified_at",
          dataType: "timestamp",
          description: "",
        },
          {
          keyName: "verify_note",
          dataType: "string",
          description: "",
        },
          {
          keyName: "verify_passed",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "work_history_id",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "regions",
      description: "",
      keys: [
        {
          keyName: "country_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "sanction_check",
          dataType: "string",
          description: "",
        },
        {
          keyName: "status_check",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_certificate",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_address",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_website",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_email_address",
          dataType: "string",
          description: "",
        },
        {
          keyName: "teaching_authority_other",
          dataType: "string",
          description: "",
        },
        {
          keyName: "legacy",
          dataType: "boolean",
          description: "",
        },
      ],
    },
    {
      entityTableName: "reminder_emails",
      description: "",
      keys: [
        {
          keyName: "remindable_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "remindable_type",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "selected_failure_reasons",
      description: "",
      keys: [
        {
          keyName: "assessment_section_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "assessor_feedback",
          dataType: "string",
          description: "",
        },
        {
          keyName: "key",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "staff",
      description: "",
      keys: [
        {
          keyName: "award_decline_permission",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "azure_ad_uid",
          dataType: "string",
          description: "",
        },
          {
          keyName: "change_name_permission",
          dataType: "boolean",
          description: "",
        },
             {
          keyName: "change_work_history_permission",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "confirmation_sent_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "confirmed_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "current_sign_in_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "current_sign_in_ip",
          dataType: "string",
          description: "",
        },
        {
          keyName: "email",
          dataType: "string",
          description: "",
        },
        {
          keyName: "failed_attempts",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "invitation_accepted_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "invitation_created_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "invitation_limit",
          dataType: "string",
          description: "",
        },
        {
          keyName: "invitation_sent_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "invitations_count",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "invited_by_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "invited_by_type",
          dataType: "string",
          description: "",
        },
        {
          keyName: "last_sign_in_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "last_sign_in_ip",
          dataType: "string",
          description: "",
        },
        {
          keyName: "locked_at",
          dataType: "string",
          description: "",
        },
        {
          keyName: "manage_applications_permission",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "remember_created_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reset_password_sent_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "reverse_decision_permission",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "sign_in_count",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "support_console_permission",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "unconfirmed_email",
          dataType: "string",
          description: "",
        },
          {
          keyName: "verify_permission",
          dataType: "boolean",
          description: "",
        },
          {
          keyName: "withdraw_permission",
          dataType: "boolean",
          description: "",
        },
      ],
    },
    {
      entityTableName: "teachers",
      description: "",
      keys: [
        {
          keyName: "canonical_email",
          dataType: "string",
          description: "",
        },
        {
          keyName: "current_sign_in_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "current_sign_in_ip",
          dataType: "string",
          description: "",
        },
        {
          keyName: "email",
          dataType: "string",
          description: "",
        },
        {
          keyName: "last_sign_in_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "last_sign_in_ip",
          dataType: "string",
          description: "",
        },
        {
          keyName: "otp_created_at",
          dataType: "timestamp",
          description: "",
        },
        {
          keyName: "otp_guesses",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "sign_in_count",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "trn",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "uuid",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "timeline_events",
      description: "",
      keys: [
        {
          keyName: "age_range_max",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "age_range_min",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "age_range_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "application_form_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "assessment_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "assessment_section_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "assignee_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "column_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "creator_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "creator_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "creator_type",
          dataType: "string",
          description: "",
        },
        {
          keyName: "event_type",
          dataType: "string",
          description: "",
          alias: "event_type_aliased",
        },
        {
          keyName: "mailer_action_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "mailer_class_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "message_subject",
          dataType: "string",
          description: "",
        },
        {
          keyName: "new_state",
          dataType: "string",
          description: "",
        },
        {
          keyName: "new_value",
          dataType: "string",
          description: "",
        },
        {
          keyName: "note_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "old_state",
          dataType: "string",
          description: "",
        },
        {
          keyName: "old_value",
          dataType: "string",
          description: "",
        },
        {
          keyName: "requestable_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "requestable_type",
          dataType: "string",
          description: "",
        },
        {
          keyName: "subjects",
          dataType: "string",
          description: "",
        },
        {
          keyName: "subjects_note",
          dataType: "string",
          description: "",
        },
        {
          keyName: "work_history_id",
          dataType: "string",
          description: "",
        },
      ],
    },
    {
      entityTableName: "uploads",
      description: "",
      keys: [
        {
          keyName: "document_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "malware_scan_result",
          dataType: "string",
          description: "",
        },
        {
          keyName: "migrated_to_aks",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "translation",
          dataType: "boolean",
          description: "",
        },
      ],
    },
    {
      entityTableName: "work_histories",
      description: "",
      keys: [
        {
          keyName: "application_form_id",
          dataType: "string",
          description: "",
        },
        {
          keyName: "canonical_contact_email",
          dataType: "string",
          description: "",
        },
        {
          keyName: "city",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_email",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_job",
          dataType: "string",
          description: "",
        },
        {
          keyName: "contact_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "country_code",
          dataType: "string",
          description: "",
        },
        {
          keyName: "end_date",
          dataType: "string",
          description: "",
        },
        {
          keyName: "end_date_is_estimate",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "hours_per_week",
          dataType: "integer",
          description: "",
        },
        {
          keyName: "job",
          dataType: "string",
          description: "",
        },
        {
          keyName: "school_name",
          dataType: "string",
          description: "",
        },
        {
          keyName: "start_date",
          dataType: "string",
          description: "",
        },
        {
          keyName: "start_date_is_estimate",
          dataType: "boolean",
          description: "",
        },
        {
          keyName: "still_employed",
          dataType: "string",
          description: "",
        },
      ],
    },
  ],
});
