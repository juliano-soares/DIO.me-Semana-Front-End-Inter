import { 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    Column,
    CreateDateColumn,
    ManyToOne,
    UpdateDateColumn
} from 'typeorm';

import { User } from './User';

@Entity()
export class Pix {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    payingUser: User;

    @Column()
    value: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}