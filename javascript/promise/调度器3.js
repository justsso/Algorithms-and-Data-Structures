class Scheduler {
    constructor(){
        this.rtasks = [];
        this.atasks = [];
        this.maxlimit = 2;
 }
    async add(promiseFunc){
        if(this.rtasks.length >= this.maxlimit) {
         return Promise.race(this.rtasks).then(() =>    this.add(promiseFunc))
        }
        let task = promiseFunc();
        this.atasks.push(task);
        let rt = task.then(() =>this.rtasks.splice(this.rtasks.indexOf(rt),1));
        this.rtasks.push(rt);
        return rt;
 }
}
const scheduler = new Scheduler();
const timeout = (time) => {
    return new Promise((r) => setTimeout(r, time));
};
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order));
};
addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4); // log: 2 3 1 4