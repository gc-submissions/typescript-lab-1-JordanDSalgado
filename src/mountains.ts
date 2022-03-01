export interface Mountain {
    name: string;
    height:number;
}

let mountains: Mountain[] = [
    {name: "killimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

export function findNameOfTallestMOuntain(mountains: Mountain[]); string {
    let currentTallestHeight: number = 0;
    let tallestMountainName: string = "";
    for (let mountain of mountains) {
        if (mountain.height > currentTallestHeight) {
            currentTallestHeight = mountain.height;
            tallestMountainName = mountain.name;
        }
    }
    return tallestMountainName;
}

let nameofTallestMountain: string = findNameOfTallestMOuntain(mountains);
console.log(nameofTallestMountain);


