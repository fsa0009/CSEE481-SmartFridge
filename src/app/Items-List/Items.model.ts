

export interface PantryItems{
    GridLocation:string;
    Name: string;
    ItemType: string;
    ItemBrand: string;
    InitialWeight: string;
    RemainingAmount: string;
    ExpirationDate: string;

}

/*
export interface Employee {
    salary: number;
    name: string;
    address: {
      country: string;
      city: string;
    };
  }
  
  // ✅ Declare directly
  const obj1: Employee = {
    salary: 100,
    name: 'James',
    address: {
      country: 'Chile',
      city: 'Santiago',
    },
  };
  
  // ✅ Using type assertion
  const obj2 = {} as Employee;
  
  obj2.name = 'Carl';
  obj2.salary = 200;


  */