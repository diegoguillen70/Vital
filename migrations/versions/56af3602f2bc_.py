"""empty message

Revision ID: 56af3602f2bc
Revises: a636043c017d
Create Date: 2023-10-17 03:17:05.526497

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '56af3602f2bc'
down_revision = 'a636043c017d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('gyms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('address', sa.String(length=500), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('phone', sa.String(length=20), nullable=True),
    sa.Column('image', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('admins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('is_admin', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=30),
               existing_nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.BOOLEAN(),
               type_=sa.String(length=30),
               existing_nullable=False)
        batch_op.alter_column('lastname',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=30),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('lastname',
               existing_type=sa.String(length=30),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.alter_column('name',
               existing_type=sa.String(length=30),
               type_=sa.BOOLEAN(),
               existing_nullable=False)
        batch_op.alter_column('password',
               existing_type=sa.String(length=30),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)

    op.drop_table('admins')
    op.drop_table('gyms')
    # ### end Alembic commands ###
