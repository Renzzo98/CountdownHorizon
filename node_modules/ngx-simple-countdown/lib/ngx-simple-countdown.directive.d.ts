import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as fromModel from './models';
import { Observable } from 'rxjs';
export declare class NgxSimpleCountdownDirective implements OnInit, OnDestroy {
    private elementRef;
    dateTo: number;
    language: string;
    reactive: boolean;
    endMessage: string;
    hideUnit: string;
    styles: string;
    keywords: fromModel.CountdownKeywords;
    countdownResult: fromModel.CountdownResult;
    dateNow: number;
    totalSecondes: number;
    interval$: Observable<number>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initSimpleCountdown;
    private createHTML;
    private isContent;
    private updateSimpleCountdown;
    private getDateNow;
    private setLanguage;
    private componentDestroyed;
}
