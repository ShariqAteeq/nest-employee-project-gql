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

  @Mutation(() => Project)
  createProject(@Args('project') emp: CreateProInput) {
    return this.proService.createPro(emp);
  }
}
