import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmpInput } from './dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private empService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.empService.findAll();
  }

  @Mutation(() => Employee)
  createEmployee(@Args('employee') emp: CreateEmpInput) {
    return this.empService.createEmp(emp);
  }
}
