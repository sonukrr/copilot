import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { LoadingDirective } from './directives/loading.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { DndDirective } from './directives/dnd.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { FirstWordPipe } from './pipes/first-word.pipe';
import { DraggableDialogDirective } from './directives/draggable-dialog.directive';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
// import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HighchartsChartModule } from 'highcharts-angular';
// import { CamelCaseToTitleCasePipe } from './pipes/camel-case-to-title-case.pipe';
// import { DateFormatPipe } from './pipes/date-format.pipe';
// import { FirstWordPipe } from './pipes/first-word.pipe';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


// import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
// import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    ArrayFilterPipe,
    UniquePipe,
    LoadingDirective,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SideNavComponent,
    AlertBoxComponent,
    DndDirective,
    SvgIconComponent,
    // CamelCaseToTitleCasePipe,
    FilterPipe,
    // DateFormatPipe,
    FirstWordPipe,
    DraggableDialogDirective,
    StartRatingComponent,
    SampleComponentComponent,
    TimeAgoPipe,
    

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // TranslateModule,
    NgxSkeletonLoaderModule,
    HighchartsChartModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ScheduleModule


  ],

  // providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  providers: [DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    PageNotFoundComponent,
    LoadingDirective,
    MaterialModule,
    SvgIconComponent,
    FirstWordPipe,
    StartRatingComponent,
    SampleComponentComponent,
    TimeAgoPipe,
    // TranslateModule,
    FilterPipe,
    NgxSkeletonLoaderModule,
    HighchartsChartModule,
    CalendarModule,
    ScheduleModule
  ]
})
export class SharedModule { }
