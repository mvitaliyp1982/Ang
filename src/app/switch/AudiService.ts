export class AudiService{

    private data: string[] = ['Audi A1', 'Audi TT COUPE/ROADSTER', 'Audi Q3', 'Audi Q5 E-TRON'];

    getData():string[]{
        return this.data
    }
    addData(name:string){
        this.data.push(name)
    }
}