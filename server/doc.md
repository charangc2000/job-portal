---Models---

## ##User

--user_id
--username : String
--email : String
--password : String
--role --BY DEFAULT USER

## ##User detail

--detail.\_id
--user_id : Schema.Types.ObjectId
--user_name : String
--user_number : String
--user_email :String
--user_location : String
--work_status : String

## ##User profile

--profile.\_id
--user_profile-picture : String

## ##Job

--company_id : id
--company_name : String
--job_designation : String
--location : String
--skills : Array
--work_experiance : String
--salary_in_CTC : { currency:String, amount:Number}
--job_type(hybrid/remote) : ["hybrid" "remote"]

## ##application

--application_id
--user_id : Schema.Types.ObjectId
--Job_id : Schema.Types.ObjectId
--applicant_name : String
--applicant_number : Number
--applicant_email : String
--applicant_resume : file

## ##appstatus

--submitted--false : Boolean
--under review--false : Boolean
--rejected--false : Boolean
--accepted--false : Boolean
