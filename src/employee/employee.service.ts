import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpInput } from './dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private empRepo: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.empRepo.find();
  }

  async createEmp(payload: CreateEmpInput): Promise<Employee> {
    const emp = this.empRepo.create(payload);
    return this.empRepo.save(emp);
  }
}
