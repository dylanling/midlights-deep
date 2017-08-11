class Dog {

}

class Cat {

}

class Bird {

}

type Mammal = Dog | Cat;

it('asdf', () => {
  const dog = new Dog();
  const cat = new Cat();
  const bird = new Bird();
  expect(dog instanceof Dog);
  expect(!(cat instanceof Dog));
  expect(!(bird instanceof Dog));
});