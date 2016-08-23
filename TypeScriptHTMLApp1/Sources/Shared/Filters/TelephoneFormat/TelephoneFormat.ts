namespace Filters {

    export function tel() {
        return function (tel: string) {
            if (!tel) { return ''; }

            var value = tel.toString().trim().replace(/^\+/, '');

            if (value.match(/[^0-9]/)) {
                return tel;
            }

            var  city, phone;

            switch (value.length) {
                case 10: // +1PPP####### ->  PPP-###-####

                    city = value.slice(0, 3);
                    phone = value.slice(3);
                    break;
                    
                default:
                    return tel;
            }
            
            return (city + "-" + phone.slice(0, 3) + '-' + phone.slice(3)).trim();
        }
    }
}