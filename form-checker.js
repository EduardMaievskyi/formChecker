class FormChecker {
	constructor(sSelector) {
		this.form = $(sSelector);
		this.textfields = this.form.find('.b-textfield');
		this.errorMessage = this.form.find('.b-form__message_error');
		console.log(this.errorMessage);
		this.textfields.blur(this.checkTextField.bind(this))
	}
	
	checkTextFieldsList(event){
			event.preventDefault();
			
			let isFormError = false;
			this.textFields.each((i, textfield)=>{
				let currentTextfield = $(textfield)
					,isTextfieldError = this.checkTextField(null, currentTextfield);
					
					if(isTextfieldError){
						isFormError = true;
					}
			});
			
}

	checkTextField(event, textfield={}) {
		let currentTextfield = textfield.length ? textfield : $(event.currentTarget)
			,currentTextfieldVal = currentTextfield.val() 
			,regexpList = {
				'name' 			: '^[A-Za-zА-Яа-я\\-\\.,\s]{1,10}$'
				,'brand' 		: '^[A-Za-z\\-]}$'
				,'price' 		: '^[0-9]{1,5}(\\.[0-9]{1,2})?}$'
				,'description' 	: '^.+}$'
			}
			
			let currentTextfieldName = currentTextfield.attr("name")
			,currentRegExp = new RegExp(regexpList[currentTextfieldName])
			,isTextfieldError = ! currentRegExp.test(currentTextfieldName)
			
		currentTextfield.toggleClass("b-textfield_error", isTextfieldError);
		console.log(currentTextfield.val(), isTextfieldError);
		return isTextfieldError;
		
	}
	

}
