import os


class BaseConfig:
    """Base configuration"""
    TESTING = False
    SECRET_KEY = 'my_precious'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    """Development configuration"""
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL', 'postgres://postgres:postgres@127.0.0.1:5435/users_dev'
    )


class TestingConfig(BaseConfig):
    """Testing configuration"""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_TEST_URL', 'postgres://postgres:postgres@127.0.0.1:5435/users_test'
    )


class ProductionConfig(BaseConfig):
    """Production configuration"""
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
