import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { CreateEmpInput } from './dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private empRepo: Repository<Employee>,
    private proService: ProjectService,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.empRepo.find();
  }

  async getProject(id: number): Promise<Project> {
    return this.proService.findOne(id);
  }

  async createEmp(payload: CreateEmpInput): Promise<Employee> {
    const emp = this.empRepo.create(payload);
    return this.empRepo.save(emp);
  }
}
