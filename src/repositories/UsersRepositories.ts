import { EntityRepository, Repository } from "typeorm";
import { User } from "../entitites/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };
