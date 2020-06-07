import { Component } from "./Component";

/**
 * Components that extend the SystemStateComponent are not removed when an entity is deleted.
 */
export abstract class SystemStateComponent<P> extends Component<P> {}
