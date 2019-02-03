# setValue
if we want to set the value of one control, this will not work, therefor we have to set the value of both controls:

formgroup.setValue({name: ‘Mocrosoft’, age: ‘25’});

It is necessary to mention all the controls inside the method. If this is not done, it will throw an error.

# patchValue
On the other hand patchvalue is a lot easier on that part, let’s say we only want to assign the name as a new value:

formgroup.patchValue({name:’Mocrosoft’});