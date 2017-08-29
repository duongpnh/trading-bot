import { Container } from 'inversify';
import { CitiesService, ICitiesService, ICitiesServiceIdentifier } from './shared';
import { citiesContainerBuilder } from './cities';

// Injecting a service into a service
// @inject(IExampleServiceIdentifier) private exampleService: IExampleService

// Injecting a service into a component (on created)
// this.exampleService = container.get<IExampleService>(IExampleServiceIdentifier);

export let container: Container = null;

export function containerBuilder(): Container {
    container = new Container();

    // Bind shared services
    container.bind<ICitiesService>(ICitiesServiceIdentifier).to(CitiesService).inSingletonScope();

    // Bind services for each module
    citiesContainerBuilder(container);

    return container;
}