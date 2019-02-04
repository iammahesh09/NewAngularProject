
# Dynamically adding or removing form control validators in reactive form

    So here is our requirement  
        - Add the "required" validator to the Phone form control when the user selects "Phone" as their contact preference
        - On the other hand, remove the "required" validator from the Phone form control, when the user selects "Email" as their contact preference
        - So on the "Phone" form control, we have to dynamically add or remove the required validator function

    This can be very easily achieved using the following 3 functions 
        - setValidators()
        - clearValidators()
        - updateValueAndValidity()

    These methods are available in the AbstractControl class. Since FormControl inherits from AbstractControl, these methods are also available to FormControl class. 
