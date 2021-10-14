import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm'; 
import { ObjectId } from 'mongodb';

@Entity("JobTitle")
export class JobTitle {
  @ObjectIdColumn()
  _id: ObjectID;
  
  @Column()
  Name: string;

  @Column()
  THName: string;
}

export default JobTitle;