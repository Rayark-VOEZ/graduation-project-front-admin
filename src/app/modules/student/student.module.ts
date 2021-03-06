import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 通用
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// 布局
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
// 数据录入
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
// 数据展示
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';
// 反馈
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { StudentRoutingModule } from 'src/app/routers/student-routing.module';

import { StudentListComponent } from 'src/app/components/students/student-list/student-list.component';
import { StudentFormComponent } from 'src/app/components/students/student-form/student-form.component';
import { StudentDetailComponent } from 'src/app/components/students/student-detail/student-detail.component';

@NgModule({
    declarations: [
        StudentListComponent,
        StudentFormComponent,
        StudentDetailComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        NzButtonModule,
        NzIconModule,
        NzTypographyModule,
        NzDividerModule,
        NzGridModule,
        NzDatePickerModule,
        NzAvatarModule,
        NzFormModule,
        NzInputModule,
        NzSelectModule,
        NzTableModule,
        NzDrawerModule,
        NzMessageModule,
        NzPopconfirmModule
    ]
})
export class StudentModule { }
