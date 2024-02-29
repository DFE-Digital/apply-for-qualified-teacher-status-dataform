const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "afqts",
    bqProjectName: "apply-for-qts-in-england",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    urlRegex: "apply-for-qts-in-england.education.gov.uk",
    dataSchema: [{
            entityTableName: "active_storage_attachments",
            description: "",
            keys: [{
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
            keys: [{
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
            keys: [{
                    keyName: "action_required_by",
                    dataType: "string",
                    description: "Action that needs to be taken by an admin, assessor, or external organisation or person on an application",
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
                    description: "When a recommendation to award has been applied",
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
                    description: "When a recommendation to decline has been applied",
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
                    historic: true,
                },
                {
                    keyName: "overdue_professional_standing",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "overdue_qualification",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "overdue_reference",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "personal_information_status",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "qualification_changed_work_history_duration",
                    dataType: "boolean",
                    description: "If true applicant changed their qualification certificate date which meant the number of months of work history they added has changed, if false the applicant has subsequently changed their work history",
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
                    historic: true,
                },
                {
                    keyName: "received_professional_standing",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "received_qualification",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "received_reference",
                    dataType: "boolean",
                    description: "",
                    historic: true,
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
                    description: "Lifecycle of the application journey - draft, pre_assessment, not_started, assessment, verification, review or completed",
                },
                {
                    keyName: "status",
                    dataType: "string",
                    description: "",
                    alias: "state",
                    historic: true,

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
                    keyName: "teaching_qualification_part_of_degree",
                    dataType: "boolean",
                    description: "A boolean indicating whether the teaching qualification is part of the bachelor’s degree.",
                },
                {
                    keyName: "waiting_on_further_information",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "waiting_on_professional_standing",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "waiting_on_qualification",
                    dataType: "boolean",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "waiting_on_reference",
                    dataType: "boolean",
                    description: "",
                    historic: true,
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
            keys: [{
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
            keys: [{
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
                    description: "category of recommendation. Value of 'unknown' is applied when an auto decline has been triggered, e.g. LOPS overdue ",
                },
                {
                    keyName: "recommendation_assessor_note",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "recommended_at",
                    dataType: "timestamp",
                    description: "When a decision is made to award or decline. Note that awarded_at and declined_at represent when the award/decline recxommendation is applied.",
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
                    description: "When an assessor assesses any part of the application. For applications which require a preliminary check, that includes the preliminary check",
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
                    keyName: "unsigned_consent_document_generated",
                    dataType: "boolean",
                    description: "indicates the assessor has generated the unsigned consent document ready to be sent to the applicant",
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
                {
                    keyName: "unsigned_consent_document_generated",
                    dataType: "boolean",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "countries",
            description: "",
            keys: [{
                    keyName: "code",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "eligibility_enabled",
                    dataType: "boolean",
                    description: "",
                },
                {
                    keyName: "eligibility_skip_questions",
                    dataType: "boolean",
                    description: "",
                },
                {
                    keyName: "other_information",
                    dataType: "string",
                    description: "",
                    alias: "countries_other_information",
                },
                {
                    keyName: "sanction_information",
                    dataType: "string",
                    description: "",
                    alias: "countries_sanction_information",
                },
                {
                    keyName: "status_information",
                    dataType: "string",
                    description: "",
                    alias: "countries_status_information",
                },
                {
                    keyName: "qualifications_information",
                    dataType: "string",
                    description: "",
                    alias: "countries_qualifications_information",
                },
                {
                    keyName: "subject_limited",
                    dataType: "boolean",
                    description: "",
                },
                {
                    keyName: "teaching_authority_address",
                    dataType: "string",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "teaching_authority_emails",
                    dataType: "string",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "teaching_authority_websites",
                    dataType: "string",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "teaching_authority_certificate",
                    dataType: "string",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "teaching_authority_other",
                    dataType: "string",
                    description: "",
                    historic: true,
                },
                {
                    keyName: "teaching_authority_name",
                    dataType: "string",
                    description: "",
                    historic: true,
                },
            ],
        },
        {
            entityTableName: "documents",
            description: "",
            keys: [{
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
            keys: [{
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
            keys: [{
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
            entityTableName: "english_language_providers",
            description: "",
            keys: [{
                    keyName: "accepted_tests",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "b2_level_requirement",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "b2_level_requirement_prefix",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "check_url",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "reference_hint",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "reference_name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "url",
                    dataType: "string",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "feature_flags_features",
            description: "",
            keys: [{
                    keyName: "active",
                    dataType: "boolean",
                    description: "",
                },
                {
                    keyName: "name",
                    dataType: "string",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "further_information_request_items",
            description: "",
            keys: [{
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
            keys: [{
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
                    pastKeyNames: ['failure_assessor_note'],
                },
                {
                    keyName: "review_passed",
                    dataType: "boolean",
                    description: "",
                    pastKeyNames: ['passed'],
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
                    keyName: "state",
                    dataType: "string",
                    description: "",
                    historic: true,
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
            keys: [{
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
            keys: [{
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
                    pastKeyNames: ['failure_assessor_note']
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
                    pastKeyNames: ['passed'],
                },
                {
                    keyName: "ready_for_review",
                    dataType: "boolean",
                    description: "",
                    historic: true,

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
                    keyName: "state",
                    dataType: "string",
                    description: "",
                    historic: true,
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
            keys: [{
                    keyName: "assessment_id",
                    dataType: "string",
                    description: "",
                },

                {
                    keyName: "consent_received_at",
                    dataType: "timestamp",
                    description: "Applicant has returned the consent",
                },
                {
                    keyName: "consent_requested_at",
                    dataType: "timestamp",
                    description: "Consent has been requested from the applicant",
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
                    pastKeyNames: ['failure_assessor_note']
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
                    pastKeyNames: ['passed'],
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
                    keyName: "consent_method",
                    dataType: "string",
                    description: "indicates whether a request for signed consent is required for qualification request. Unknown is the default before an assessor has chosen consent method; unsigned indicates signed consent is not required, signed_ecctis indicates signed consent is required and consent document is from Ecctis; signed_institution indicates signed consent is required and signed consent is from the institution.",
                },
                {
                    keyName: "signed_consent_document_required",
                    dataType: "boolean",
                    description: "indicates whether a request for signed consent is required for qualification request - replaced by consent_method.",
                    historic:true
                },

                {
                    keyName: "unsigned_consent_document_downloaded",
                    dataType: "boolean",
                    description: "indicates whether an applicant has downloaded an unsigned consent document",
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
                    keyName: "consent_method",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "unsigned_consent_document_generated",
                    dataType: "boolean",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "qualifications",
            description: "",
            keys: [{
                    keyName: "application_form_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "certificate_date",
                    dataType: "string",
                    description: "Date on teaching certificate",
                },
                {
                    keyName: "complete_date",
                    dataType: "string",
                    description: "Date completed teaching qualification",
                },
                {
                    keyName: "institution_country_code",
                    dataType: "string",
                    description: "Country code of institution providing teaching qualification",
                },
                {
                    keyName: "institution_name",
                    dataType: "string",
                    description: "Institution providing teaching qualification",
                },
                {
                    keyName: "part_of_university_degree",
                    dataType: "boolean",
                    description: "Teaching qualification part of university degree",
                },
                {
                    keyName: "start_date",
                    dataType: "string",
                    description: "Date started teaching qualification",
                },
                {
                    keyName: "title",
                    dataType: "string",
                    description: "Title of teaching qualification",
                },
            ],
        },
        {
            entityTableName: "reference_requests",
            description: "",
            keys: [{
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
                    pastKeyNames: ['failure_assessor_note']
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
                    pastKeyNames: ['passed'],
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
                    keyName: "state",
                    dataType: "string",
                    description: "",
                    historic: true,
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
            keys: [{
                    keyName: "application_form_skip_work_history",
                    dataType: "boolean",
                    description: "",
                },
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
                    keyName: "other_information",
                    dataType: "string",
                    description: "",
                    alias: "regions_other_information",
                },
                {
                    keyName: "qualifications_information",
                    dataType: "string",
                    description: "",
                    alias: "regions_qualifications_information",
                },
                {
                    keyName: "requires_preliminary_check",
                    dataType: "boolean",
                    description: "",
                    alias: "regions_requires_preliminary_check",
                },
                {
                    keyName: "reduced_evidence_accepted",
                    dataType: "boolean",
                    description: "",
                    alias: "regions_reduced_evidence_accepted",
                },
                {
                    keyName: "sanction_information",
                    dataType: "string",
                    description: "",
                    alias: "regions_sanction_information",
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
                    keyName: "status_information",
                    dataType: "string",
                    description: "",
                    alias: "regions_status_information",
                },
                {
                    keyName: "teaching_authority_certificate",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "teaching_authority_emails",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "teaching_authority_address",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "teaching_authority_name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "teaching_authority_online_checker_url",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "teaching_authority_provides_written_statement",
                    dataType: "string",
                    description: "",
                    alias: "regions_teaching_authority_provides_written_statement",
                },
                {
                    keyName: "teaching_authority_requires_submission_email",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "teaching_authority_websites",
                    dataType: "string",
                    description: "",
                    pastKeyNames: ['teaching_authority_website']
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
                    keyName: "written_statement_optional",
                    dataType: "boolean",
                    description: "",
                    alias: "regions_written_statement_optional",
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
            description: "Contains reminder email data and polymorphic links to other tables",
            keys: [{
                    keyName: "remindable_id",
                    dataType: "string",
                    description: "Part of a polymorphic foreign key. Indicates the ID of the table specified in remindable_type",
                },
                {
                    keyName: "remindable_type",
                    dataType: "string",
                    description: "Part of polymorphic foreign key. Indicates the table that the remindable_id links to",
                },
                {
                    keyName: "name",
                    dataType: "string",
                    description: " Used when there are different kinds of reminder emails that can be sent. The default type of email is 'expiration' which indicates a reminder email being sent before the object expires (i.e. before expired_at is set). However, application forms have a 'references' type of email which is sent to the applicant if any reference requests are due to expire soon to try and get them to prompt their referees. The reason it is on the application form is the service sends a single email combining all the outstanding reference requests together,rather than one email per reference request.",
                },
            ],
        },
        {
            entityTableName: "selected_failure_reasons",
            description: "",
            keys: [{
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
                    keyName: "assess_permission",
                    dataType: "boolean",
                    description: "",
                },
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
            keys: [{
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
            keys: [{
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
                    alias: "new_value_aliased",
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
            keys: [{
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
            keys: [{
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
                    dataType: "timestamp",
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
