import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProInput } from './project-dtos';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private proRepo: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.proRepo.find({ relations: ['employees'] });
  }

  async findOne(id: number): Promise<Project> {
    return this.proRepo.findOne({ where: { id }, relations: ['employees'] });
  }

  async createPro(payload: CreateProInput): Promise<Project> {
    const emp = this.proRepo.create(payload);
    return this.proRepo.save(emp);
  }
}
