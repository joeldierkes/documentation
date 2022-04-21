---
title: Python Type Annotations
---

## Abstract

Python is a dynamically-typed programming language. Dynamic type checked
programming languages verify the type safety at runtime. Type-related bugs thus
occur at runtime. Tests are in place to check the types and prevent
bugs. However, tests don't always cover all possible combinations of types.

[PEP 484](https://peps.python.org/pep-0484/) introduces _type hints_ to
Python. Type hints add more information to the source code and allow us to
automatically check the code for type missmatches. Type-related bugs will
thereby checked at compile time (pre-runtime), rather than at runtime.

Rucio recently deprecated Python2, which allows us to introduce type hints to
the code-base.

## Adding Type Checks to the Project

Introducing type hints in a big project is challeging. The code-base is too
large to introduce type hints with only one PR, they therefore have to be added
incrementally. A GitHub actions job ensures that newly written code contains
type hints:

### GitHub Actions

The `Check Python Type Annotations` job in the autotests checks, if new code
contains type annotations. It does this by comparing the number of missing
python type annotations before the PR with the number of missing python type
annotations after the PR. If the number before is less then the number after,
new code, which is not typed, was added. The script then exists with a non-zero
exit code. If it is equals or bigger, type annotations have been added to the
repository.

As of now, only the number of missing type annotations will be used. The job
does not check for wrong type hints or inconsistencies. This will be added once
all python type hints are added.

## Usage

There are comprehensive and descriptive documentations on the web on how to use
python type annotations. E.g.:

- [**PEP 484**](https://peps.python.org/pep-0484/)

  Contains general information about type hints in pyhton. This includes the
  motivation, the definition, what to do with edge cases, and much more.

- [**MyPy type hints cheat
  sheet**](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)

  The cheat sheet contains information on the syntax of type annotations and
  which ones to use when.

## Type Annotations in Rucio

To ensure a consistent use of type annotations in Rucio, here is a list of
variables with their corresponding type:

| Code section | Variable | Type | Description |
|---|---|---|---|
| DID | session |  | The sqlalchemy session. |
| DID | scope | `str` | The scope of a DID. |
| DID | name | `str` | The name of a DID. |
| DID | account | `str` | The account name. |
| DID | did_type | `str` | The DID type. |
