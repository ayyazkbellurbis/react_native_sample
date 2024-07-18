import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { SampleRepository } from '../modules/repositories/SampleRepository';
import { ISampleRepository } from '../modules/repositories/ISampleRepository';

const container = new Container();
container.bind<ISampleRepository>(TYPES.SampleRepository).to(SampleRepository);

export { container };
