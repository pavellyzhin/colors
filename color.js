class Color {

    #_red = '00'; // оттенок красного
    #_green = '00'; // оттенок зеленого
    #_blue = '00'; // оттенок синего

    constructor({red='00',green='00',blue='00'} = {}){
        this.setBlue(blue);
        this.setRed(red);
        this.setGreen(green);
    }

    setRed(red='00'){
       if(typeof red == 'number'){
           if(red > 255 || red < 0 ){
                throw new Error('Число для крассного  оттенка может быть указано только в диапозоне от 0 до 255 включительно.');
           }
            
           this.#_red = red.toString(16);
       }

       if(typeof red == 'string'){
           if(red.length != 2){
                throw new Error('Если вы указываете оттенок красного цвета в 16чной системе счисления, то нужно указывать минимум 2 символа от 00 до FF')
           }

           let rCheck = parseInt(red,16);

           if(rCheck > 255 || rCheck < 0 || rCheck === NaN){
                throw new Error('Число для красного оттенка может быть указано только в диапозоне от 00 до ff включительно.');
           }

           this.#_red = red;
       }
        
    }

    setGreen(green='00'){
       if(typeof green =='number'){
           if(green > 255  || green < 0){
                throw new Error('Число для зеленого оттенка может быть указано только в диапозоне от 0 до 255 включительно.');
           }

           this.#_green = green.toString(16);
       }

       if(typeof green == 'string'){
           if(green.length !=2){
                throw new Error('Если вы указываете оттенок зеленого цвета в 16чной системе счисления, то нужно указывать минимум 2 символа от 00 до FF')
           }

           let gCheck = parseInt(green,16);

           if(gCheck > 255 || gCheck < 0 || gCheck === NaN){
                throw new Error('Число для зеленого оттенка может быть указано только в диапозоне от 00 до ff включительно.');
           }

           this.#_green = green;
       }
        

    }

    setBlue(blue='00'){
        if(typeof blue =='number'){
            if(blue >255  || blue < 0){
                 throw new Error('Число для зеленого оттенка может быть указано только в диапозоне от 0 до 255 включительно.');
            }

            this.#_blue = blue.toString(16);
        }
 
        if(typeof blue == 'string'){
            if(blue.length !=2){
                 throw new Error('Если вы указываете оттенок зеленого цвета в 16чной системе счисления, то нужно указывать минимум 2 символа от 00 до FF')
            }
 
            let gCheck = parseInt(blue,16);
 
            if(gCheck > 255 || gCheck < 0 || gCheck === NaN){
                 throw new Error('Число для зеленого оттенка может быть указано только в диапозоне от 00 до ff включительно.');
            }
 
            this.#_blue = blue;
        }

    }

    getBlue(number=false){
        if(number === true){

            return parseInt(this.#_blue,16);

        } else {

            return this.#_blue;

        }
        
    }

    getRed(number=false){
        if(number === true){
            return parseInt(this.#_red, 16);
        }else{
            return this.#_red;
        }
        
    }

    getGreen(number=false){
        if(number === true){
            return parseInt(this.#_green,16);
        } else {
            return this.#_green;
        }
        
    }

    getColor(){
        return '#' + this.#_red + this.#_green + this.#_blue;
    }
}