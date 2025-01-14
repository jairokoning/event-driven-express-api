import { User } from "../src/domain/entities/User";

test("should create user", () => {
  const input = {
    id: "1",
    name: "John Doe",
    githubUrl: "https://github.com/johndoe",
    email: "johndoe@example.com",
  }
  const user = new User(input.id, input.name, input.githubUrl, input.email);
  expect(user.id).toBe(input.id);
  expect(user.name).toBe(input.name);
  expect(user.githubUrl).toBe(input.githubUrl);
  expect(user.email).toBe(input.email);
})