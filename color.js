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
        if(typeof red !== 'string'){
            throw new Error('В качестве цвета может быть указана только строка');
        }

        if(red.length !=2 ){
            throw new Error('В качестве красного цвета может быть указана строка из двух символов для шестизначного кода цвета');
        }

        this.#_red = red;
    }

    setGreen(green='00'){
        if(typeof green !== 'string'){
            throw new Error('В качестве цвета может быть указана только строка');
        }

        if(green.length != 2){
            throw new Error('Количество символов при указании цвета должно быть 2');
        }

        this.#_green = green;
    }

    setBlue(blue='00'){
        if(typeof blue !== 'string'){
            throw new Error('В качестве цвета может быть указана только строка');
        }

        if(blue.length != 2){
            throw new Error('Количество символов долнжо равняться 2 при указании синего оттенка для шестизначного кода цвета')
        }

        this.#_blue = blue;
    }

    getBlue(){
        return this.#_blue;
    }

    getRed(){
        this.#_red;
    }

    getGreen(){
        return this.#_green;
    }

    getColor(){
        return '#' + this.#_red + this.#_green + this.#_blue;
    }
}