function validate(e){
    if(e.target.id === "i_name"){
        let input = e.target;
            let inputValue = input.value;
            // Use a regular expression to check if the input contains only alphabetic characters
            let regex = /^[a-zA-Z]+$/;
            if (!regex.test(inputValue)) {
                input.value = inputValue.replace(/[^a-zA-Z]+/g, '');
            }
    }

    if (e.target.id === "i_mobile") {
        let input = e.target;
        let inputValue = input.value;
        // Use a regular expression to check if the input contains only numeric characters
        let regex = /^[0-9]+$/;
        if (!regex.test(inputValue)) {
            input.value = inputValue.replace(/[^0-9]+/g, '');
        }
    }
    
}