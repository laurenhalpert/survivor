"""add row

Revision ID: 3854dca98b33
Revises: d360583c3601
Create Date: 2024-03-09 15:48:49.404307

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3854dca98b33'
down_revision = 'd360583c3601'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('amazing_race_contestants', schema=None) as batch_op:
        batch_op.add_column(sa.Column('bio', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('amazing_race_contestants', schema=None) as batch_op:
        batch_op.drop_column('bio')

    # ### end Alembic commands ###