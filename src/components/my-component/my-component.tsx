import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The card's title
   */
  @Prop() myTitle: string;

  /**
   * The card's description
   */
  @Prop() description: string;

  /**
   * The card's btnSubmitLabel
   */
  @Prop() btnSubmitLabel: string;

  /**
   * The card's submitted event
   */
  @Event() submitted: EventEmitter<void>;

  public onSubmit(): void {
    this.submitted.emit();
  }

  public render(): any {
    return (
      <section class="my-component">
        {this.myTitle ? <h3 class="my-component__title">{this.myTitle}</h3> : ''}
        {this.description ? <p class="my-component__description">{this.description}</p> : ''}
        {this.btnSubmitLabel ? (
          <button class="my-component__submit" onClick={() => this.onSubmit()}>
            {this.btnSubmitLabel}
          </button>
        ) : (
          ''
        )}
      </section>
    );
  }
}
