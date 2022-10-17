const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Jane Doe");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("janedoe@gmail.com");
      expect(manager.officeNumber).toEqual(50);
    });
  });

  describe("getName", () => {
    it("Should return the object's name property", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getName()).toEqual("Jane Doe");
    });
  });

  describe("getId", () => {
    it("Should return the object's id property", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getID()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getEmail()).toEqual("janedoe@gmail.com");
    });
  });

  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getOffice()).toEqual(50);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", 50);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
