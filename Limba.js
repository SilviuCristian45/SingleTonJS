class Limba{
    //exista un camp static care tine instanta
    constructor(denumire) {
        if(Limba.instanta == null){
            this.denumire = denumire;
            Limba.instanta = this;
        }
    }
}

const len = new Limba("daneza");
export {len};