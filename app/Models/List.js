

export default class List {
    constructor(data) {
        console.log("hello from List")
        this.chore = data.chore

    }

    getTemplate(index) {
        let template =
            `
        <div class = "col-4">
        <h1>${this.chore}</h1>
        `
    }
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
}