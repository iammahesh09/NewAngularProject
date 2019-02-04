# Loop through all form controls in formgroup in reactive form

Understanding this technique is very useful, as it can help us perform the following on all the form controls in a reactive form 

- Reset form controls
- Enable or disable all form controls or just the nested formgroup controls
- Set validators and clear validators
- Mark form controls as dirty, touched, untouched, pristine etc.
- Move validation messages and the logic to show and hide them into the component class from the view template.



  logKeyValuePairs(group: FormGroup): void {
    // loop through each key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
      // Get a reference to the control using the FormGroup.get() method
      const abstractControl = group.get(key);
      // If the control is an instance of FormGroup i.e a nested FormGroup
      // then recursively call this same method (logKeyValuePairs) passing it
      // the FormGroup so we can get to the form controls in it
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
        // If the control is not a FormGroup then we know it's a FormControl
      } else {
        console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
      }
    });
  }