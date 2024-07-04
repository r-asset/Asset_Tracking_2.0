import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ToolbarComponent } from './toolbar/toolbar.component';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableModule } from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ItemManagementComponent } from './item-management/item-management.component';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule} from 'primeng/checkbox';
import { NewItemPopupComponent } from './item-management/Add-ons/new-item-popup/new-item-popup.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './item-management/Add-ons/new-item-popup/camera/camera.component';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FocusTrapModule } from 'primeng/focustrap';
import { ImageModule } from 'primeng/image';
import { HttpClientModule} from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { SettingsComponent } from './settings/settings.component';
import { PlantManagementComponent } from './settings/Add-ons/plant-management/plant-management.component';
import { LocationComponent } from './settings/Add-ons/location/location.component';
import { ConditionsComponent } from './settings/Add-ons/conditions/conditions.component';
import { StatusComponent } from './settings/Add-ons/status/status.component';
import { CategoryComponent } from './settings/Add-ons/category/category.component';
import { ReaderManagementComponent } from './settings/Add-ons/reader-management/reader-management.component';
import { UserManagementComponent } from './settings/Add-ons/user-management/user-management.component';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { LocationtypeComponent } from './settings/Add-ons/location/locationtype/locationtype.component';
import { SitesTableComponent } from './settings/Add-ons/location/sites-table/sites-table.component';
import { AreasTableComponent } from './settings/Add-ons/location/areas-table/areas-table.component';
import { ZonesTableComponent } from './settings/Add-ons/location/zones-table/zones-table.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReportsComponent } from './reports/reports.component';
import { PathTrackingComponent } from './reports/Addons/path-tracking/path-tracking.component';
import { DwellReportComponent } from './reports/Addons/dwell-report/dwell-report.component';
import { InoutReportComponent } from './reports/Addons/inout-report/inout-report.component';
import { AssetAvailabilityComponent } from './reports/Addons/asset-availability/asset-availability.component';
import { MplComponent } from './reports/Addons/mpl/mpl.component';
import { DividerModule } from 'primeng/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from './login/login.module';
import { MessageService,ConfirmationService } from 'primeng/api';

import { CommonModule } from '@angular/common';
import { PasswordModule } from "primeng/password";
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { HighchartsChartModule } from 'highcharts-angular';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MonthlyReportComponent } from './reports/Addons/monthly-report/monthly-report.component';



@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        ItemManagementComponent,
        NewItemPopupComponent,
        CameraComponent,
        SettingsComponent,
        PlantManagementComponent,
        LocationComponent,
        ConditionsComponent,
        StatusComponent,
        CategoryComponent,
        ReaderManagementComponent,
        UserManagementComponent,
        LocationtypeComponent,
        SitesTableComponent,
        AreasTableComponent,
        ZonesTableComponent,
        WorkflowComponent,
        ReportsComponent,
        PathTrackingComponent,
        DwellReportComponent,
        InoutReportComponent,
        AssetAvailabilityComponent,
        MplComponent,
        MonthlyReportComponent,
   
    ],
    providers: [DynamicDialogRef, MessageService, ConfirmationService],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        CardModule,
        NgApexchartsModule,
        // NgxDatatableModule,
        TableModule,
        ToolbarModule,
        InputTextModule,
        CalendarModule,
        TooltipModule,
        ToastModule,
        DynamicDialogModule,
        ScrollTopModule,
        TabViewModule,
        DropdownModule,
        CheckboxModule,
        WebcamModule,
        RippleModule,
        StyleClassModule,
        FocusTrapModule,
        ImageModule,
        HttpClientModule,
        DialogModule,
        SidebarModule,
        SplitterModule,
        TagModule,
        ConfirmDialogModule,
        InputSwitchModule,
        InputTextareaModule,
        DividerModule,
        FontAwesomeModule,
        LoginModule,
        PasswordModule,
        MenubarModule,
        TieredMenuModule,
        MenuModule,
        HighchartsChartModule,
        SidebarComponent
    ]
})
export class AppModule { }
