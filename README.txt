# MERN-APP

```mermaid
classDiagram
    Company -- Cases : has
    Company -- Adjudications : has
    Company -- Insolvencies : has
    Company -- Licenses : has
    Company -- ASIC_Documents : has
    Cases -- Parties : has
    Cases -- Hearings : has
    Cases -- Documents : has
    Licenses -- LicenseClasses : has
    Licenses -- LicenseParties : has

    class Company {
        +company_id [PK]
        +create_date
        +insolvency_risk_factor
        +abn_status
        +abn_gst_status
        +abn_postcode
        +abn_state
        +asic_status
        +asic_date_of_registration
    }
    class Cases {
        +uuid [PK]
        +company_id [FK]
        +type
        +notification_time
        +court_name
        +case_type
        +case_number
        +jurisdiction
        +suburb
        +next_hearing_date
        +case_name
        +url
        +total_parties
        +total_documents
        +total_hearings
    }
    class Parties {
        +party_id [PK]
        +case_uuid [FK]
        +name
        +type
        +role
        +url
    }
    class Hearings {
        +hearing_id [PK]
        +case_uuid [FK]
        +date
        +type
        +location
        +url
    }
    class Documents {
        +document_id [PK]
        +case_uuid [FK]
        +name
        +type
        +url
    }
    class Adjudications {
        +adjudication_id [PK]
        +company_id [FK]
        +uuid
        +type
        +notification_time
        +court_name
        +case_type
        +case_number
        +jurisdiction
    }
    class Insolvencies {
        +insolvency_id [PK]
        +company_id [FK]
        +uuid
        +type
        +notification_time
        +court_name
        +case_type
        +case_number
        +jurisdiction
    }
    class Licenses {
        +license_id [PK]
        +company_id [FK]
        +uuid
        +state
        +authority
        +number
        +former_number
        +name
        +license_holder
        +trading_name
        +type
        +address
        +abn
        +acn
        +category
        +url
        +licence_name
        +licence_type
        +notification_time
        +internal_reference
        +other_names
        +insolvency_risk_factor
        +match_on
    }
    class LicenseClasses {
        +license_class_id [PK]
        +license_id [FK]
        +unique_id
        +class
        +grade
        +status
        +details
    }
    class LicenseParties {
        +license_party_id [PK]
        +license_id [FK]
        +start_date
        +end_date
        +name
        +type
        +role
        +address
        +acn
        +abn
    }
    class ASIC_Documents {
        +asic_document_id [PK]
        +company_id [FK]
        +uuid
        +type
        +notification_time
        +court_name
        +case_type
        +case_number
        +jurisdiction
        }
