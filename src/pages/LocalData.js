class Localdata{
    constructor(){
        this.initdata = [
            {
                id: "111",
                name: "Dog Food",
                price: '12.60',
                img: 'upload/p1.jpg',
                count: 1
            },
            {
                id: "222",
                name: "Cat litter ",
                price: '22.60',
                img: 'upload/p2.jpg',
                count: 1
            },
            {
                id: "333",
                name: "Bird toy",
                price: '32.60',
                img: 'upload/p3.jpg',
                count: 1
            }
        ]
    }
    init(){
        localStorage.setItem("initdata",JSON.stringify(this.initdata));
    }
    getdata(){
        // console.log(localStorage.getItem("initdata"))
        return JSON.parse(localStorage.getItem("initdata")||"{}")
    }
    savedata(data){
        localStorage.setItem("initdata", JSON.stringify(data));
    }
    updatecar(obj){
       
        let data = this.getdata();
        let index=-1;
        data.find((e,i)=>{
            index=i
            return obj.id===e.id
        });
        if(index>-1){
            data[index] = { ...data[index],...obj}
        }else{
            data.push(obj)
        }
        this.savedata(data);
    }

}


let local = new Localdata()
// local.init();
export default local;  ;