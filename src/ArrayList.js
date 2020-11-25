function Arraylist () {
    this.array = [];
    this.size = 0;
}

Arraylist.prototype.init = function(array) {
    this.array = array;
    this.size = array.length;
}

Arraylist.prototype.arrpop = function() {
    
    const poped = this.array[this.array.length - 1];
    this.array.length = this.array.length - 1;
    this.size--;

    return poped;
}

Arraylist.prototype.arrpush = function(element) {

    this.array.length = this.array.length+1;
    this.size++;
    this.array[this.array.length-1] = element;

    console.log(this.array);
    
    return this.size;
}

Arraylist.prototype.arrshift = function() {

    const shifted = this.array[0];

    for ( i = 0; i<this.array.length; i++) {

        this.array[i] = this.array[i+1];

    }
    this.array.length = this.array.length - 1;

    this.size--

    return shifted;
}

Arraylist.prototype.arrunshift = function(addedelem) {

    this.array.length = this.array.length + 1;

    for ( i = this.array.length-1; i>0; i--) {

        this.array[i] = this.array[i-1];

    }
    this.array[0] = addedelem;

    this.size++

    return this.array.length;
}

Arraylist.prototype.arrsize = function() {
    return this.size;
}

Arraylist.prototype.arrevers = function() {
    let revers = [];
        
        for( i = 0; i < this.array.length; i++ ) {
            revers[this.array.length - i - 1] = this.array[i];
        }
        
        this.array = revers;
        
        return this.array;    
}

Arraylist.prototype.arrclear = function() {

    this.array.length = 0;
    this.size = 0;

    return this.array;
}

Arraylist.prototype.arrslice = function( ind1, ind2 ) {

    let slicedarr = [];
        if( ind2 > 0 && ind1 >= 0 ) {
            let slicedarrlength = ind2 - ind1;
           
            for( let i = 0; i < slicedarrlength; i++) {
                slicedarr[i] = this.array[i + ind1]
            }
        }
        else if( ind2 <= 0 && ind1 >=0 ) {
            let slicedarrlength = this.array.length + ind2 - ind1;
           
            for( let i = 0; i < slicedarrlength; i++) {
                slicedarr[i] = this.array[i + ind1]
            }
        } 
        else if ( ind1 < 0 ) {
            let slicedarrlength = -1 * ind1;
           
            for( let i = 0; i < slicedarrlength; i++) {
                slicedarr[i] = this.array[i]
            }
        }

                    
    return slicedarr;
}

Arraylist.prototype.arrtoString = function() {
    let comma=", ";
    let stringified="["+this.array[0]+comma;

    for ( let i = 1; i < this.array.length; i++) {
        if(i !== this.array.length - 1) {
            stringified += this.array[i]+comma;
        } else {
            stringified += this.array[i] + "]" ;
        }
    }

    return stringified;
}

module.exports = Arraylist;




