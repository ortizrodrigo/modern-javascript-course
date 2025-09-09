let d;

d = new Date();
d = d.toString();
d = new Date(2021, 6, 10, 12, 30, 0);

d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");
d = new Date("07-10-2022");

d = Date.now(); // number for now

d = new Date(); // Date object for now
d = d.getTime();
d = d.valueOf();

d = new Date(1757390919809);
d = Math.floor(Date.now() / 1000); // to seconds

console.log(d, typeof d);
