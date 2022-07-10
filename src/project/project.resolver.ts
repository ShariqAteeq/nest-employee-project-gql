import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project } from './entities/project.entity';
import { CreateProInput } from './project-dtos';
import { ProjectService } from './project.service';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private proService: ProjectService) {}

  @Query(() => [Project], { name: 'getAllProjects' })
  findAll() {
    return this.proService.findAll();
  }

  @Query(() => Project)
  getProject(@Args('projectId') id: number) {
    return this.proService.findOne(id);
  }

  @Mutation(() => Project)
  createProject(@Args('project') emp: CreateProInput) {
    return this.proService.createPro(emp);
  }
}
