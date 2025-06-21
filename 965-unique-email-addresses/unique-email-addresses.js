/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
     let set = new Set()

    let flag = false

    for (let i = 0; i < emails.length; i++) {
        let correctEmail = ''
        flag=false 
        let domainSign=false 
        for (let j = 0; j < emails[i].length; j++) {

            if (emails[i][j] == '.'&& domainSign==false ) {
                continue
            }
            else if (emails[i][j] == '+'&& domainSign==false ) {
                flag = true
            }

            else if (emails[i][j] == '@') {
                flag = false
                domainSign=true
            }


            if (flag == false) {

                correctEmail += emails[i][j]
            }
        }

       
 set.add(correctEmail)
        
    }

    return set.size
  
};