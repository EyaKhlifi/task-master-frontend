import {Component, OnInit} from '@angular/core';
import {BoardData} from "../../interfaces/board-data";
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {NewBoardDialogComponent} from "./new-board-dialog/new-board-dialog.component";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  initialListBoards: BoardData[] = [
    {
      id: '1',
      name: 'Product Roadmap',
      dateCreation: new Date('2023-08-10'),
      visibility: 'Public'
    },
    {
      id: '2',
      name: 'Marketing Strategies',
      dateCreation: new Date('2023-08-05'),
      visibility: 'Public'
    },
    {
      id: '3',
      name: 'UI/UX Designs',
      dateCreation: new Date('2023-07-30'),
      visibility: 'Public'
    },
    {
      id: '4',
      name: 'Customer Feedback',
      dateCreation: new Date('2023-07-20'),
      visibility: 'Public'
    },
    {
      id: '5',
      name: 'Development Tasks',
      dateCreation: new Date('2023-07-10'),
      visibility: 'Public'
    },
    {
      id: '6',
      name: 'HR Policies',
      dateCreation: new Date('2023-06-30'),
      visibility: 'Public'
    },
    {
      id: '7',
      name: 'Financial Projections',
      dateCreation: new Date('2023-06-20'),
      visibility: 'Public'
    },
    {
      id: '8',
      name: 'Event Planning',
      dateCreation: new Date('2023-06-10'),
      visibility: 'Public'
    },
    {
      id: '9',
      name: 'Company Retreats',
      dateCreation: new Date('2023-05-30'),
      visibility: 'Public'
    },
    {
      id: '10',
      name: 'Innovation Ideas',
      dateCreation: new Date('2023-05-20'),
      visibility: 'Public'
    },
    {
      id: '11',
      name: 'Sales Metrics',
      dateCreation: new Date('2023-05-10'),
      visibility: 'Public'
    },
    {
      id: '12',
      name: 'Customer Onboarding',
      dateCreation: new Date('2023-04-30'),
      visibility: 'Public'
    },
    {
      id: '13',
      name: 'Content Calendar',
      dateCreation: new Date('2023-04-20'),
      visibility: 'Public'
    },
    {
      id: '14',
      name: 'Team Goals',
      dateCreation: new Date('2023-04-10'),
      visibility: 'Public'
    },
    {
      id: '15',
      name: 'Competitor Analysis',
      dateCreation: new Date('2023-03-30'),
      visibility: 'Public'
    },
    {
      id: '16',
      name: 'Partnership Outreach',
      dateCreation: new Date('2023-03-20'),
      visibility: 'Public'
    },
    {
      id: '17',
      name: 'Product Feedback',
      dateCreation: new Date('2023-03-10'),
      visibility: 'Public'
    },
    {
      id: '18',
      name: 'Branding Guidelines',
      dateCreation: new Date('2023-02-28'),
      visibility: 'Public'
    },
    {
      id: '19',
      name: 'Investor Updates',
      dateCreation: new Date('2023-02-20'),
      visibility: 'Public'
    }
  ];
  listBoards: BoardData[] = [];
  boardForm = new FormGroup({
    search: new FormControl(''),
    select: new FormControl(''),
  });

  constructor(public dialog: MatDialog) {
    this.listBoards = this.initialListBoards;
  }

  ngOnInit(): void {
    this.boardForm.controls['select'].valueChanges.subscribe(value => {
      this.selectSwitch(value);
    });
    this.boardForm.controls['search'].valueChanges.subscribe(value => {
      if (value === "") {
        this.listBoards = this.initialListBoards;
        this.selectSwitch(this.boardForm.value.select);
      } else {
        this.listBoards = this.initialListBoards.filter(board => board.name.toLowerCase().includes(value.toLowerCase()));
      }
    });
    this.boardForm.controls['select'].patchValue("Ascending Alphabetically");
  }


  selectSwitch(value: string) {
    switch (value) {
      case "Latest Activity":
        this.listBoards = this.listBoards.sort((a, b) => b.dateCreation.getTime() - a.dateCreation.getTime());
        break;
      case "Oldest Activity":
        this.listBoards = this.listBoards.sort((a, b) => a.dateCreation.getTime() - b.dateCreation.getTime());
        break;
      case "Ascending Alphabetically":
        this.listBoards = this.listBoards.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        this.listBoards = this.listBoards.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  openNewBoardDialog(): void {
    this.dialog.open(NewBoardDialogComponent, {
      disableClose: true,
      width: '800px',
      height: '300px'
    });
  }

}
