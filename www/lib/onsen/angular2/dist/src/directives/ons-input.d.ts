import { ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
/**
 * @element ons-input
 * @directive OnsInput
 * @selector ons-input
 * @description
 *   [en]Angular 2 directive for `<ons-input>` component.[/en]
 *   [ja]`<ons-input>`要素のAngular 2ディレクティブです。[/ja]
 * @example
 *   <ons-input [(value)]="value"></ons-input>
 */
export declare class OnsInput implements OnChanges, OnDestroy {
    private _elementRef;
    private _element;
    private _boundOnChange;
    /**
     * @input value
     * @type {string}
     * @desc
     *   [en]Input value for the internal `<input>` element.[/en]
     *   [ja]内部の`input`要素に対する入力値を設定します。[/ja]
     */
    _value: string;
    /**
     * @output valueChange
     * @type {string}
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]内部の`input`要素の値が変更された時に発火します。[/ja]
     */
    _valueChange: EventEmitter<string>;
    constructor(_elementRef: ElementRef);
    _onChange(event: any): void;
    ngOnChanges(changeRecord: {
        [key: string]: SimpleChange;
    }): void;
    readonly element: any;
    ngOnDestroy(): void;
}
